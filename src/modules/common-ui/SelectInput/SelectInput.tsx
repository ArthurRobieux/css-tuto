import classnames from "classnames";

import styles from "./styles.module.scss";

export type SelectInputOption = { value: string; label: string };

export type SelectInputProps = {
  className?: string;
  disabled?: boolean;
  value: SelectInputOption | null;
  onChange: any;
  options: SelectInputOption[];
};
export const SelectInput = ({
  className,
  disabled,
  value,
  onChange,
  options,
}: SelectInputProps) => {
  return (
    <select
      className={classnames(styles.selectInput, className, {
        [styles.disabled]: disabled,
      })}
      value={value ? value.value : undefined}
      onChange={(evt) =>
        onChange(options.find((o) => evt.target.value === o.value))
      }
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
