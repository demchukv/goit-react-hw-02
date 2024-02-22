
const Notification = ({ totalFeedback = 0 }) => {
  return (
    <>
    {!totalFeedback && <p>No feedback yet</p>}
    </>
  )
}

export default Notification