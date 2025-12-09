"use client";

export default function PdfViewer() {
  return (
    <div className="w-full h-full bg-white p-0 m-0">
      <iframe
        src="/DS.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH&background=white&fitw=true&pagemode=none"
        className="w-full h-full"
        style={{
          border: "none",
          backgroundColor: "white"
        }}
      />
    </div>
  );
}
