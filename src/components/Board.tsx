interface IBoard {
  cells: string[];
  cellClicked: Function;
}

export default function Board({ cells, cellClicked }: IBoard) {
  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {cells.map((el, idx) => (
          <div
            key={idx}
            id={idx.toString()}
            onClick={(event: any) => cellClicked(event.target.id, cells)}
            className="fixed"
          >
            {el}
          </div>
        ))}
      </div>
    </>
  );
}
