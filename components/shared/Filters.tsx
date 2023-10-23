"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select";

interface filtersSelectProps {
  filters: { name: string; value: string }[];
  otherClasses?: string;
  containerClasses?: string;
}

export const Filters = ({ filters, otherClasses, containerClasses }: filtersSelectProps) => {
  return (
    <>
      <div className={containerClasses}>
        <Select>
          <SelectTrigger
            className={`background-light800_dark300 text-dark500_light700 px-5 ${otherClasses}`}
          >
            <div className="line-clamp-1 flex-1 text-left">
              <SelectValue placeholder="Select a Filter" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {filters.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
