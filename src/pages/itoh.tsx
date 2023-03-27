import { Card } from "@/components/Card";
import { ComingSoon } from "@/components/ComingSoon";
import { MyHeader } from "@/components/MyHeader";
import { FC } from "react";

export default function Home() {
  return (
    <Card className="md:pt-52 pt-2 pl-0 pr-0 w-screen">
      <div className="flex md:gap-x-16 gap-x-1 pb-16 ">
        <div className="md:w-[320px] w-full px-2">
          <img src={"/itoh.webp"} alt="zeng" width={9999} height={9999} />
        </div>
        <div className="flex flex-col md:gap-y-20 gap-y-12 md:pt-5 pt-2">
          <div className="flex flex-col md:gap-y-7 gap-y-2">
            <div className="md:text-5xl text-lg md:flex">
              <div>伊藤 亮(イトウ　リョウ)</div>
            </div>
            <div className="md:text-5xl text-base">Ryo Itoh</div>
          </div>
          <div className="flex flex-col gap-y-2 md:text-lg text-xs">
            <div>東北大学情報科学研究科 准教授</div>
            <div>
              Graduate School of Information Sciences Tohoku University,
              Associate Professor
            </div>
            <div>Mail: itoh at se.is.tohoku.ac.jp</div>
          </div>
        </div>
      </div>
      <TeacherCard headerText="教育（Academic Background）">
        <ul className="list-disc flex flex-col gap-y-5">
          <li>
            <div>2003. 3　京都大学経済学部卒</div>
            <div className="text-xs">
              2003 Kyoto University (BA of Economics)
            </div>
          </li>
          <li>
            <div>
              2005. 3　東北大学大学院情報科学研究科 博士前期課程修了
              修士（情報科学）取得
            </div>
            <div className="text-xs">
              2005 Tohoku University (MA of Information Sciences)
            </div>
          </li>
          <li>
            <div>
              2008. 3　東北大学大学院情報科学研究科 博士後期課程修了
              博士（情報科学）取得
            </div>
            <div className="text-xs">
              2008 Tohoku University (PhD of Information Sciences)
            </div>
          </li>
        </ul>
      </TeacherCard>
      <TeacherCard headerText="職歴（Employment）">
        <ul className="list-disc flex flex-col gap-y-5">
          <li>
            <div>2008.4 (財)運輸政策研究機構・運輸政策研究所 研究員</div>
            <div className="text-xs">
              2008-2010 Research Fellow of Institute of Transport Policy Studies
            </div>
          </li>
          <li>
            <div>2010.10 名古屋市立大学経済学研究科 講師</div>
            <div className="text-xs">
              2010- 2014 Assistant Professor of Nagoya City University
            </div>
          </li>
          <li>
            <div>2014. 7　名古屋市立大学経済学研究科　准教授</div>
            <div className="text-xs">
              2014- 2015 Accosiate Professor of Nagoya City University
            </div>
          </li>
        </ul>
      </TeacherCard>
      <TeacherCard headerText="研究キーワード（Research Interests）">
        <ul className="list-disc flex flex-col gap-y-5">
          <li>
            <div>都市・地域経済学</div>
            <div>
              growth of regions and cities, inter-firm network and
              agglomeration, land price
            </div>
          </li>
        </ul>
      </TeacherCard>
    </Card>
  );
}

interface TeacherCardProps {
  headerText: string;
  children: React.ReactNode;
}
const TeacherCard: FC<TeacherCardProps> = ({
  headerText,
  children,
}: TeacherCardProps) => {
  return (
    <div className="px-10 md:px-20 md:pl-32 pb-16 w-full">
      <MyHeader>{headerText}</MyHeader>
      <div className="px-6">{children}</div>
    </div>
  );
};
