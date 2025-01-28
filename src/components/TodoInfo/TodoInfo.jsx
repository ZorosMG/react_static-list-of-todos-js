// Add the required props
export const TodoInfo = ({ todo }) => {
  const todoClass = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={todoClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && (
        <a className="UserInfo" href={`mailto:${todo.user.email}`}>
          {todo.user.name}
        </a>
      )}
    </article>
  );
};
