import { createData } from "./MaterialStyles";
export const DisplayTablesData = (playersArray, sortingElemnet) => {
  const displayedData = [
    createData(playersArray[0]?.web_name, playersArray[0]?.[sortingElemnet]),
    createData(playersArray[1]?.web_name, playersArray[1]?.[sortingElemnet]),
    createData(playersArray[2]?.web_name, playersArray[2]?.[sortingElemnet]),
    createData(playersArray[3]?.web_name, playersArray[3]?.[sortingElemnet]),
    createData(playersArray[4]?.web_name, playersArray[4]?.[sortingElemnet]),
    createData(playersArray[5]?.web_name, playersArray[5]?.[sortingElemnet]),
    
  ];

  return displayedData;
};
