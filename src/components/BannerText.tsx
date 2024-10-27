import { Trans, useTranslation } from "react-i18next";

import UserCard from "./UserCard";

const BannerText = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-60 flex justify-center items-center gap-4">
      <div className="tracking-tight text-center font-bold text-7xl lg:text-7xl">
        <Trans
          t={t}
          i18nKey="banner"
          components={{
            ownmd: (
              <div className="tracking-tight text-center inline font-bold from-[#5EA2EF] to-[#0072F5] text-7xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b">
                Own .MD
              </div>
            ),
          }}
        />
      </div>
      <UserCard />
    </div>
  );
};

export default BannerText;
