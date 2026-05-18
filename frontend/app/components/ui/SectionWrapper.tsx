interface SectionWrapperProps {
  sectionNum: string;
  id?: string;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  sectionNum,
  id,
  className = "",
  bodyClassName = "",
  children,
}: SectionWrapperProps) {
  return (
    <div className={`pg-section ${className}`} id={id}>
      <div className="pg-side">
        <div className="pg-num">{sectionNum}</div>
      </div>
      <div className={`pg-body ${bodyClassName}`}>{children}</div>
    </div>
  );
}
