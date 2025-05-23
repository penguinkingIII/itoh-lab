import { Card } from "@/components/Card";
import { MyHeader } from "@/components/MyHeader";
import { MyP } from "@/components/MyP";
import Link from "next/link";
import { FC, ReactNode } from "react";

export default function Home() {
  return (
    <div className="md:pt-36 pt-2 md:w-full w-screen flex flex-col items-center ">
      <div className="h-40 md:h-[500px] lg:h-[100vh] overflow-hidden md:w-screen">
        <img src={"/lab.jpg"} alt="univ" />
      </div>
      <LabCard className="pt-0 md:pb-0 md:pr-0 md:-mt-60 -mt-10">
        <div className="md:flex h-full">
          <div className="md:w-2/3 md:mr-10 pt-16">
            <MyHeader>
              <div className="JR font-bold"> 研究キーワード</div>
            </MyHeader>
            <MyP className="mb-20 Japanese">
              空間経済学、産業集積、グローバル化、均衡、国際貿易、都市経済学、ゲーム理論、政策分析{" "}
            </MyP>
            <MyHeader>
              <div className="JR font-bold">都市形成と集積の経済メカニズム</div>
            </MyHeader>
            <MyP className="mb-20 Japanese">
              <div className="pb-5">
                交通、通信ネットワークによって結ばれた個々の都市は、人、財、サービス、知識の移動を通じて、全体として有機的な「都市システム」を形成している。また、グローバル化、ボーダーレス化の急速な進展のもとで、都市、地域、国際経済は複雑に絡み合い、現代の都市システムは国を越えたグローバルな社会経済システムを形成しつつある。{" "}
              </div>
              <div>
                本研究室は都市や産業の集積形成の理論を中心として、都市、地域、国際貿易などを対象とした空間経済の構造とダイナミックな変遷過程を解明し、都市・地域の経済発展の政策分析を行う。これらの問題に対し、都市経済学、地域経済学、国際経済学、ゲーム理論、ORなどの関連する分野を複合的に動員した、「地域科学」と呼ばれる学際的なアプローチにより研究を進める。現在の主なテーマは以下の通りである。{" "}
              </div>
            </MyP>
          </div>
      
        </div>
      </LabCard>

      <LabCard>
        <div
          className="flex items-center gap-x-7 justify-between md:w-full"
        >
        <div className="w-full">
          <div className="flex w-fit justify-between">
              <StaffCard headerText="教員">
                <div className="flex w-full justify-center">
                  <div className="md:mt-16">
                    <div className="md:text-2xl md:mb-5">准教授　伊藤亮</div>
                    <div className="md:text-2xl md:mb-7 mb-3">
                      (Associate Prof. Ryo Itoh)
                    </div>
                    <ul className="list-disc flex flex-col gap-y-2 md:text-base text-xs">
                      <div>2008.4　運輸政策研究機構運輸政策研究所　研究員</div>
                      <div>2010.10　名古屋市立大学経済学研究科　講師</div>
                      <div>2014.7　名古屋市立大学経済学研究科　准教授</div>
                      <div>2015.4:　東北大学大学院情報科学研究科 准教授</div>
                      <div className="md:mt-5 underline text-blue-700">
                        <Link
                          target="_blank"
                          href={
                            "https://sites.google.com/site/ryoitohspage/home"
                          }
                        >
                          詳しくはこちらへ
                        </Link>
                      </div>
                    </ul>
                  </div>
                </div>
              </StaffCard>
              <div className="md:w-1/3 w-0">
                <img
                  src={"/itoh.webp"}
                  alt="zeng"
                  className="mt-24"
                  width={700}
                  height={900}
                />
              </div>
            </div>
          
            <div className="flex w-fit justify-between">
            </div>
            <div className="flex w-full justify-between">
              <StaffCard headerText="客員研究員">
                <div className="md:mt-24 md:flex w-full">
                  <StudentCard>
                    <img
                      src={"/mht.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    毛海涛
                    <div>出身地：中国山东省</div>
                    <div>趣味：バドミントン</div>
                    <div>メール:qrmaohaitao[at]163.com</div>
                  </StudentCard>
                  <StudentCard>
                    <img
                      src={"/yjc.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    余江川
                    <div>出身地：中国重慶市</div>
                    <div>趣味：登山、読書史</div>
                    <div>yuchuanjiang[at]scu.edu.cn</div>
                  </StudentCard>
                </div>
              </StaffCard>
            </div>
            <div className="flex w-full justify-between">
              <StaffCard headerText="学生">
                <div className="md:mt-24 md:flex w-full">
                  <StudentCard>
                    <img
                      src={"/liuyh.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    劉宜昊(D3)
                    <div>出身地：中国新疆ウイグル自治区</div>
                    <div>趣味：バスケットボール、水泳</div>
                    <div>メール:liu[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>
                  <StudentCard>
                <img
                src={"/tang.jpg"}
                alt="zeng"
                className="pb-5"
                width={180}
                height={240}
              />
              唐晨雪(D3)
              <div>出身地: 中国湖南省</div>
              <div>趣味: 読書、散歩</div>
              <div>メール: tang[at]se.is.tohoku.ac.jp</div>
             </StudentCard>
                  
                    <StudentCard>
                    <img
                      src={"/lyf.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    <div className="flex gap-x-2">劉依凡(特別研究学生)</div>
                    <div>出身地: 中国江苏省</div>
                    <div>趣味: 音楽</div>
                    <div>メール: </div>
                    <div>liu.yifan.s7[at]dc.tohoku.ac.jp</div>
                       </StudentCard>
                       </div>
                     <div className="md:mt-24 md:flex w-full">
                
                     <StudentCard>
                      <img
                     src={"/fan.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                      />
                    <div>范小叉(M2)</div>
                    <div>出身地: 中国四川省</div>
                    <div>趣味: 電車、アニメ、旅行</div>
                    <div>メール: </div>
                    <div>fan.xiaocha.t2[at]dc.tohoku.ac.jp</div>
                   </StudentCard>
                   <StudentCard>
                    <img
                      src={"/dong.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    董振武(M2)
                    <div>出身地: 中国湖北省</div>
                    <div>趣味: 旅行、音楽</div>
                    <div>メール:</div>
                    <div>dongzhenwu[at]se.is.tohoku.ac.jp</div>
                  </StudentCard>
                  <StudentCard>
                    <img
                      src={"/zhangyt.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    张宇彤(M1)
                    <div>出身地: 中国陕西省</div>
                    <div>趣味: ゲーム、ピストバイク、大河ドラマ</div>
                    <div>メール:</div>
                    <div>zhang.yutong.t6[at]dc.tohoku.ac.jp</div>
                  </StudentCard>
                </div>
                <div className="md:mt-24 md:flex w-full">
                    <StudentCard>
                    <img
                      src={"/chengyf.jpg"}
                      alt="zeng"
                      className="pb-5"
                      width={180}
                      height={240}
                    />
                    程毅飛(M1)
                    <div>出身地: 中国陕西省</div>
                    <div>趣味: 音楽、旅行</div>
                    <div>メール:</div>
                    <div>cheng.yifei.r1[at]dc.tohoku.ac.jp</div>
                    </StudentCard>
                </div>
              </StaffCard>
            </div>
          </div>
        </div>
        <div
          className="flex items-center gap-x-7 justify-between md:w-full"
        >
        <div className="w-full">
        <div className="md:flex w-full">
        </div>
        <div className="flex w-full justify-between">
</div>

<div className="flex w-full justify-between">
  <StaffCard headerText="卒業生">
    <div className="md:flex w-full">
      <StudentCard>
        <img
          src={"/tsuboi.jpg"}
          alt="zeng"
          className="pb-5"
          width={180}
          height={240}
        />
        <div className="flex gap-x-2">
          坪井和史
          <Link
            target="_blank"
            href={"https://researchmap.jp/kazufumi_tsuboi"}
          >
            <div className="underline text-blue-700">research map</div>
          </Link>
        </div>
        <div>[2023.4-] 日本学術振興会 特別研究員 DC2</div>
        <div>出身地: 神奈川県</div>
        <div>趣味: 陸上競技、星や森を眺めること</div>
        <div>メール: tsuboi[at]se.is.tohoku.ac.jp</div>
      </StudentCard>
    </div>
  </StaffCard>
</div>

          </div>
        </div>
      </LabCard>
    </div>
  );
}

interface StudentCardProps {
  children: ReactNode;
}

const StudentCard: FC<StudentCardProps> = ({ children }) => {
  return (
    <div className="md:w-1/3 md:mb-0 mb-10 overflow-hidden items-center flex-col flex">
      {children}
    </div>
  );
};

interface StaffCardProps {
  headerText: string;
  children: ReactNode;
}
export const StaffCard: FC<StaffCardProps> = ({
  headerText,
  children,
}: StaffCardProps) => {
  return (
    <div className="md:pb-36 pb-12 w-full">
      <MyHeader>{headerText}</MyHeader>
      <div className="md:text-xl text-xs">{children}</div>
    </div>
  );
};

interface LabCardProps {
  children: ReactNode;
  className?: string;
}
const LabCard: FC<LabCardProps> = ({ children, className }) => {
  return (
    <Card className={`min-h-fit  px-10 md:px-20 ${className}`}>{children}</Card>
  );
};
