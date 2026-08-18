import useReveal from "../hooks/useReveal";

export default function Reveal({ children, className = "", delay = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "revealed" : ""} ${delay} ${className}`}>
      {children}
    </div>
  );
}