import { Card } from "@/components/Card";
import { FC, ReactNode } from "react";

const header1 = ["日時", "発表者", "備考"];
const info1 = [
  ["4月15日", "唐", "　"],
  ["5月13日", "範", "　"],
  ["5月20日", "張", "　"],
  ["5月27日", "程", "　"],
  ["6月24日", "唐", "　"],
  ["7月1日", "範", "　"],
  ["7月8日", "張", "　"],
  ["7月15日", "程", "　"],
];
const header2 = ["日時", "午前", "午後", "備考"];
const info2 = [
  ["4月16日", "劉（宜）", "劉（雨）", "　"],
  ["4月24日", "唐", "　", "　"],
  ["5月8日", "董", "林", "中間発表（午前のみ）"],
  ["5月15日", "鄭", "肖", "　"],
  ["5月22日", "範", "小平", "　"],
  ["5月29日", "菖蒲", "　", "　"],
  ["6月5日", "山原", "程", "　"],
  ["6月19日", "董", "蒋", "　"],
  ["7月10日", "菅田", "杉本", "　"],
  ["7月17日", "宇藤", "張", "　"],
  ["7月24日", "河俣", "　", "　"],
];

export default function Home() {
  return (
    <div className="md:pt-36 pt-2 md:w-full w-screen flex flex-col items-center ">
      <div className="h-40 md:h-[500px] lg:h-[100vh] overflow-hidden w-screen">
        <img src={"/semi.png"} alt="univ" width={9999} height={9999} />
      </div>
      <Card className="md:pt-24 pt-7 md:pb-0 md:pr-0 md:-mt-56 -mt-10 w-full">
        <div className="md:text-xl  md:pb-5 pb-2">
          令和7年度　前期火曜日
        </div>
        <div className="md:w-3/5 w-full border-2 border-black">
          <div className="flex w-full justify-between">
            {header1.map((text, index) => (
              <div
                className="border border-black bg-black text-white md:text-lg text-xs h-full w-full text-center"
                key={index}
              >
                {text}
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col justify-between">
            {info1.map((row, index) => {
              console.log(row);
              return (
                <div className="flex w-full justify-between" key={index}>
                  <MyTableCell>{row[0]}</MyTableCell>
                  <MyTableCell>{row[1]}</MyTableCell>
                  <MyTableCell>{row[2]}</MyTableCell>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:text-xl md:pt-24 pt-10 md:pb-5 pb-2">
          令和7年度　前期木曜日
        </div>
        <div className="md:w-3/5 w-full border-2 border-black">
          <div className="flex w-full justify-between">
            {header2.map((text, index) => (
              <div
                className="border border-black bg-black text-white md:text-lg text-xs h-full w-full text-center"
                key={index}
              >
                {text}
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col justify-between">
            {info2.map((row, index) => {
              console.log(row);
              return (
                <div className="flex w-full justify-between" key={index}>
                  <MyTableCell>{row[0]}</MyTableCell>
                  <MyTableCell>{row[1]}</MyTableCell>
                  <MyTableCell>{row[2]}</MyTableCell>
                  <MyTableCell>{row[3]}</MyTableCell>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:text-base text-xs pt-5 md:pb-24 ">
          午前、午後の開始時刻はそれぞれ10:30 と13:15 となる{" "}
        </div>
      </Card>
    </div>
  );
}

interface MyTabCellProps {
  children: ReactNode;
}
const MyTableCell: FC<MyTabCellProps> = ({ children }) => {
  return (
    <div className="border border-black flex-1 h-full text-center md:text-lg text-xs">
      {children}
    </div>
  );
};
