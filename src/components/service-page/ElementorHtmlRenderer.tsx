"use client";

import { useEffect, useMemo, useRef } from "react";

interface ElementorHtmlRendererProps {
  bodyAttributes: Record<string, string>;
  bodyContent: string;
  headMarkup: string;
}

const toAttributeObject = (serializedEntries: string) => {
  try {
    const parsed = JSON.parse(serializedEntries) as Array<[string, string]>;
    return Object.fromEntries(parsed);
  } catch (error) {
    console.error("Failed to parse body attributes", error);
    return {};
  }
};

const cloneScriptElement = (source: HTMLScriptElement) => {
  const script = document.createElement("script");
  Array.from(source.attributes).forEach(({ name, value }) => {
    script.setAttribute(name, value);
  });
  script.text = source.textContent ?? "";
  return script;
};

const activateLazyRenderedBlocks = (root: HTMLElement) => {
  root
    .querySelectorAll<HTMLElement>("[data-wpr-lazyrender]")
    .forEach((node) => {
      node.removeAttribute("data-wpr-lazyrender");
      node.classList.add("wpr-lazyrendered");
    });
};

const revealElementorAnimations = (root: HTMLElement) => {
  root
    .querySelectorAll<HTMLElement>(".elementor-invisible")
    .forEach((node) => node.classList.remove("elementor-invisible"));
};

const triggerLifecycleEvents = () => {
  const events: Array<{ target: Window | Document; type: string }> = [
    { target: document, type: "DOMContentLoaded" },
    { target: window, type: "load" },
    { target: document, type: "elementor/lazyload/observe" },
  ];

  events.forEach(({ target, type }) => {
    try {
      const event = new Event(type, { bubbles: true });
      target.dispatchEvent(event);
    } catch (error) {
      console.warn(`Failed to dispatch ${type}`, error);
    }
  });
};

const ElementorHtmlRenderer = ({
  bodyAttributes,
  bodyContent,
  headMarkup,
}: ElementorHtmlRendererProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headNodesRef = useRef<HTMLElement[]>([]);
  const originalBodyAttributesRef = useRef<Map<string, string | null> | null>(
    null
  );

  const serializedAttributes = useMemo(
    () => JSON.stringify(Object.entries(bodyAttributes)),
    [bodyAttributes]
  );

  useEffect(() => {
    if (!originalBodyAttributesRef.current) {
      const snapshot = new Map<string, string | null>();
      document.body.getAttributeNames().forEach((name) => {
        snapshot.set(name, document.body.getAttribute(name));
      });
      originalBodyAttributesRef.current = snapshot;
    }

    const attributes = toAttributeObject(serializedAttributes);

    Object.entries(attributes).forEach(([name, value]) => {
      if (value === undefined) {
        document.body.removeAttribute(name);
      } else {
        document.body.setAttribute(name, value);
      }
    });

    return () => {
      if (!originalBodyAttributesRef.current) {
        return;
      }

      originalBodyAttributesRef.current.forEach((value, name) => {
        if (value === null || typeof value === "undefined") {
          document.body.removeAttribute(name);
        } else {
          document.body.setAttribute(name, value);
        }
      });
      originalBodyAttributesRef.current = null;
    };
  }, [serializedAttributes]);

  useEffect(() => {
    headNodesRef.current.forEach((node) => node.remove());
    headNodesRef.current = [];

    if (!headMarkup.trim()) {
      return;
    }

    const template = document.createElement("template");
    template.innerHTML = headMarkup;

    const resources = template.content.querySelectorAll("link, style, script");

    resources.forEach((node) => {
      const tagName = node.tagName;

      if (tagName === "SCRIPT") {
        const script = cloneScriptElement(node as HTMLScriptElement);
        document.head.appendChild(script);
        headNodesRef.current.push(script);
        return;
      }

      document.head.appendChild(node);
      headNodesRef.current.push(node as HTMLElement);
    });

    return () => {
      headNodesRef.current.forEach((node) => node.remove());
      headNodesRef.current = [];
    };
  }, [headMarkup]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    container.innerHTML = bodyContent;

    const scripts = Array.from(container.querySelectorAll("script"));
    scripts.forEach((scriptElement) => {
      const executedScript = cloneScriptElement(scriptElement);
      scriptElement.replaceWith(executedScript);
    });

    activateLazyRenderedBlocks(container);
    revealElementorAnimations(container);

    triggerLifecycleEvents();

    return () => {
      container.innerHTML = "";
    };
  }, [bodyContent]);

  return (
    <div className="elementor-html-renderer" ref={containerRef}>
      <noscript>
        This page requires JavaScript to display Elementor content.
      </noscript>
    </div>
  );
};

export default ElementorHtmlRenderer;
