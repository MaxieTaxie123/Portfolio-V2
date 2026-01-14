export type CheckBoxProps = {
  id?: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
};

export default function CheckBox({
  id,
  label,
  checked,
  onChange,
  className,
  containerClassName,
  ariaLabel,
}: CheckBoxProps) {
  return (
    <label
      className={
        (
          containerClassName ??
          "flex items-center gap-2 px-3 py-2 z-10"
        )
      }
      htmlFor={id}
    >
      {label && (
        <span className="text-sm font-medium tracking-wide select-none">
          {label}
        </span>
      )}
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={"h-4 w-4 cursor-pointer " + (className ?? "")}
        aria-label={ariaLabel ?? label}
      />
    </label>
  );
}
