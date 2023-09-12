export default function Stats({ items }) {
  const totitems = items.length;
  return (
    <>
      <footer className="stats">
        <em>
          ya have {totitems} items ya list and ya have completerd only this much
        </em>
      </footer>
    </>
  );
}
