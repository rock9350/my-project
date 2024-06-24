import { data } from "./data";
import { Table } from "@mantine/core";

function FirstTable() {
  const groupedData = data.reduce((cropGroup, crop) => {
    if (!cropGroup[crop.Year]) {
      cropGroup[crop.Year] = [];
    }
    cropGroup[crop.Year].push(crop);
    return cropGroup;
  }, {});

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Year</Table.Th>
          <Table.Th>Crop with Maximum Production</Table.Th>
          <Table.Th>Crop with Minimum Production</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {Object.entries(groupedData).map(([year, crops]) => {
          const validCrops = crops.filter(
            (crop) => crop["Crop Production (UOM:t(Tonnes))"] !== ""
          );

          let maxCrop = { "Crop Production (UOM:t(Tonnes))": -Infinity };
          let minCrop = { "Crop Production (UOM:t(Tonnes))": Infinity };

          validCrops.forEach((crop) => {
            const production = Number(crop["Crop Production (UOM:t(Tonnes))"]);
            if (
              production > Number(maxCrop["Crop Production (UOM:t(Tonnes))"])
            ) {
              maxCrop = crop;
            }
            if (
              production < Number(minCrop["Crop Production (UOM:t(Tonnes))"])
            ) {
              minCrop = crop;
            }
          });

          return (
            <Table.Tr key={year}>
              <Table.Td>{year}</Table.Td>
              <Table.Td>
                {maxCrop["Crop Name"]} (
                {maxCrop["Crop Production (UOM:t(Tonnes))"]})
              </Table.Td>
              <Table.Td>
                {minCrop["Crop Name"]} (
                {minCrop["Crop Production (UOM:t(Tonnes))"]})
              </Table.Td>
            </Table.Tr>
          );
        })}
      </Table.Tbody>
    </Table>
  );
}

export default FirstTable;
