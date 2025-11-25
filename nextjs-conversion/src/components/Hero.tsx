export default function Hero() {
  return (
    <section
      className="relative flex min-h-[clamp(300px,100vh,720px)] items-stretch justify-between bg-[#0F3D3A] bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url('/wp-content/uploads/2025/04/GettyImages-1364777011_edit.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
      <div className="relative z-10 flex w-full flex-col justify-end pb-[9vh]">
        <h1 className="font-['Forum'] text-[56px] font-normal leading-[1em] text-white">
          Transforming Businesses for a{" "}
          <span className="text-[#C8F8A9]">Stronger Future</span>.
        </h1>
        <h5 className="mb-2.5 font-['DM_Sans'] text-[20px] font-normal leading-[1.4em] text-[#F2F5F1]">
          Guiding businesses at every stage toward strategic success.
        </h5>
        <div className="flex items-center gap-12">
          <a
            href="https://execor.vamtam.com/free-consultation/"
            className="inline-flex items-center gap-12 rounded-lg bg-[#C8F8A9] px-4 py-4 font-['DM_Sans'] text-[14px] font-medium leading-[1em] text-[#0F3D3A] transition-colors hover:bg-[#0F3D3A] hover:text-[#F2F5F1]"
          >
            <span>Book A Free Strategy Call</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </a>
        </div>
      </div>
      <div
        className="relative z-10 w-full overflow-hidden rounded-t-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/wp-content/uploads/2025/03/GettyImages-75546129.jpg')`,
          marginTop: "110px",
        }}
      ></div>
    </section>
  );
}
