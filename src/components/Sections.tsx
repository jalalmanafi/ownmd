import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Select, SelectItem, Selection } from "@nextui-org/react";

import { sections } from "../static/data";
import { X } from "lucide-react";

const Sections = () => {
  const [values, setValues] = React.useState<Selection>(new Set([]));
  const selectedSections = [...values].toString();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSectionsParam = searchParams.get("selectedSections");

  useEffect(() => {
    if (!!selectedSections && values) {
      setSearchParams({ selectedSections });
    }
  }, [values]);

  useEffect(() => {
    if (!!selectedSectionsParam) {
      setValues(new Set(selectedSectionsParam?.split(",")));
    }
  }, [selectedSectionsParam]);

  const handeleReset = () => {
    setSearchParams({});
    setValues(new Set([]));
  };

  return (
    <Select
      selectionMode="multiple"
      placeholder="Sections"
      selectedKeys={values}
      onSelectionChange={setValues}
      size="lg"
      className="max-w-lg"
      aria-label="Sections"
      classNames={{
        value: "text-sm",
      }}
      startContent={
        selectedSections && (
          <Button
            isIconOnly
            onClick={handeleReset}
            size="sm"
            className="outline-none bg-transparent"
          >
            <X size={18} />
          </Button>
        )
      }
    >
      {sections.map((section) => (
        <SelectItem key={section.value} className=" text-sm">
          {section.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default Sections;
