import Spline from "@splinetool/react-spline";
export default function SplineScreen(){
    return(
      <div className="absolute bottom-0 z-[-1] w-full ">
  <div className="relative w-full h-full">
    <Spline scene="https://prod.spline.design/S3WnR8XJLJbPybfU/scene.splinecode" />
    <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-transparent" />
  </div>
</div>

    );
}