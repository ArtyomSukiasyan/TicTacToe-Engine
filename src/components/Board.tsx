interface IBoard {
  cells: string[];
  values: string[];
  cellClicked: Function;
}

export default function Board({ cells, values, cellClicked }: IBoard) {
  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {cells.map((_, idx: number) => (
          <div
            key={idx}
            id={idx.toString()}
            onClick={(event: any) => cellClicked(event.target.id, cells)}
            className="fixed"
          >
            {values[idx]}
          </div>
        ))}
      </div>
    </>
  );
}
