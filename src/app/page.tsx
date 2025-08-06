import { AppChart } from "@/components/Appchart";
import ChartAreaGradient from "@/components/areachart";
import { ChartPieDonutText } from "@/components/Piechart";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 max-sm:grid-cols-1">
      <div className="bg-primary-foreground p-4 xl:col-span-2 ">
        <AppChart />
      </div>
      <div className="bg-primary-foreground p-4 ">
        <ChartPieDonutText />
      </div>
      <div className="bg-primary-foreground p-4  "></div>
      <div className="bg-primary-foreground p-4 sm:col-span-2  ">
        {" "}
        <ChartAreaGradient />
      </div>
      <div className="bg-primary-foreground p-4 xl:col-span-2  lg:col-span-1 ">
        test
      </div>
      <div className="bg-primary-foreground p-4 ">test</div>
    </div>
  );
}
