export const Contact = ({ name, id, number, handleDelete }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <p>
        {name}: {number}
      </p>
      <button
        style={{ width: '100px', height: '20px', marginLeft: '16px' }}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};
