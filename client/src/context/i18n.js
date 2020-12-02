import React, { ReactNode, useState } from "react";
import PropTypes from "prop-types";

export const localeDicts = {
  de: {
    content: "Hier steht die deutsche Übersetzung",
  },
  en: {
    content:
      "The 3 Rs Reduce, Reuse, Recycle – these three R words are an important part of sustainable living, as they help to cut down on the amount of waste we have to throw away. Its Really simple! Reduce the amount of waste you produce. Reuse items as much as you can before replacing them. Recycle items wherever possible. Using the 3 Rs also helps to minimise the amount of space needed for landfill sites, where waste materials are disposed of.",
  },
};

export const I18nContext = React.createContext(null);

export const I18nProvider = ({ children }) => {
  const [dict, setDict] = useState(localeDicts.de);

  return (
    <I18nContext.Provider value={{ dict, setDict }}>
      {children}
    </I18nContext.Provider>
  );
};

I18nProvider.propTypes = {
  children: PropTypes.node,
};
