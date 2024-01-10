

const Footer = ({ length }) => {

  return (
    <footer className="footer">
      <p>You have {length} ToDo {length === 1 ? 'Task' : 'Tasks'}</p>
    </footer>
  )
}

export default Footer