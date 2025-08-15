export default function CircuitBackground() {
    return (
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0F111A] overflow-hidden">
        {/* Left Circuit */}
        <div className="absolute top-0 left-0 w-[220px] h-[350px]">
          <div className="circuit-lines"></div>
        </div>
  
        {/* Right Circuit (mirrored) */}
        <div className="absolute top-0 right-0 w-[220px] h-[350px] rotate-180">
          <div className="circuit-lines"></div>
        </div>
      </div>
    );
  }
  