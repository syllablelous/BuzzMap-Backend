import { useState } from "react"

const ReportForm = () => {
  const [report_id, setReportId] = useState('')
  const [district, setDistrict] = useState('')
  const [barangay, setBarangay] = useState('')
  const [specific_location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [report_type, setReportType] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const report = {report_id, district, barangay, specific_location, date, time, report_type, description}

    const response = await fetch('/api/v1/posts', {
      method: 'POST',
      body: JSON.stringify(report),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setReportId('')
      setDistrict('')
      setBarangay('')
      setLocation('')
      setDate('')
      setTime('')
      setReportType('')
      setDescription('')
      setError(null)
      console.log('New report submitted for admins', json)
    }
  }
  
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Submit a Report!</h3>

      <label>Report ID:</label>
      <input
        type="text"
        onChange={(e) => setReportId(e.target.value)}
        value={report_id}
      />

      <label>District:</label>
      <input
        type="number"
        onChange={(e) => setDistrict(e.target.value)}
        value={district}
      />

      <label>Barangay:</label>
      <input
        type="text"
        onChange={(e) => setBarangay(e.target.value)}
        value={barangay}
      />

      <label>Specific Location:</label>
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={specific_location}
      />

      <label>Date:</label>
      <input
        type="text"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <label>Time:</label>
      <input
        type="text"
        onChange={(e) => setTime(e.target.value)}
        value={time}
      />

      <label>Report Type:</label>
      <input
        type="text"
        onChange={(e) => setReportType(e.target.value)}
        value={report_type}
      />
      
      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button>Submit Report</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ReportForm