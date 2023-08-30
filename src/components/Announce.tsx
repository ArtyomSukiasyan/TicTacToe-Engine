export default function Announce({ text }: { text: string }) {
  return (
    <div className="modal">
      <div className="modal-content">{text}</div>
    </div>
  );
}
