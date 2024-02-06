

const dayMap = {
  0: {
    ja: "日",
    en: "Sun"
  },
  1: {
    ja: "月",
    en: "Mon"
  },
  2: {
    ja: "火",
    en: "Tue"
  },
  3: {
    ja: "水",
    en: "Wed"
  },
  4: {
    ja: "木",
    en: "Thu"
  },
  5: {
    ja: "金",
    en: "Fri"
  },
  6: {
    ja: "土",
    en: "Sat"
  },
};

const monthMap = {
  0: {
    ja: "",
    en: "Jan"
  },
  1: {
    ja: "",
    en: "Feb"
  },
  2: {
    ja: "",
    en: "Mar"
  },
  3: {
    ja: "",
    en: "Apr"
  },
  4: {
    ja: "",
    en: "May"
  },
  5: {
    ja: "",
    en: "Jun"
  },
  6: {
    ja: "",
    en: "Jul"
  },
  7: {
    ja: "",
    en: "Aug"
  },
  8: {
    ja: "",
    en: "Sep"
  },
  9: {
    ja: "",
    en: "Oct"
  },
  10: {
    ja: "",
    en: "Nov"
  },
  11: {
    ja: "",
    en: "Dec"
  },
};

export const makeDateTime = (date) => {
  const d = new Date(date);

  const year = String(d.getFullYear()).padStart(4, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const datedate = String(d.getDate()).padStart(2, "0");

  const day = dayMap[d.getDay()];

  const monthshort = String(monthMap[d.getMonth()]?.en);

  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");

  return {
    year,
    month,
    monthshort,
    date: datedate,
    hours,
    minutes,
    seconds,
    day: day,
    d
  };
}

const isInvalidDate = ( date ) => {
  try{
    if(date === true || date === false || date === null){
      return true;
    }
    const d = new Date(date);
    if(d.toString() === "Invalid Date"){
      return true;
    }
    return false;
  }catch(e){
    return true;
  }

}

export const makeDatetimeStringForDisplay = ( d ) => {
  const obj = {
    "yyyy/MM/dd HH:mm:ss": "",
    "yyyy/MM/dd HH:mm": ""
  };
  if(isInvalidDate(d)){
    return obj
  }

  if(typeof d === "number" && isNaN(d)){
    return obj
  }

  const o = makeDateTime(d);
  obj["yyyy/MM/dd HH:mm:ss"] = `${o.year}/${o.month}/${o.date} ${o.hours}:${o.minutes}:${o.seconds}`;
  obj["yyyy/MM/dd HH:mm"] = `${o.year}/${o.month}/${o.date} ${o.hours}:${o.minutes}`;
  return obj;
    
}
