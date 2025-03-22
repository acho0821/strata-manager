// src/app/contact/page.tsx
export default function ContactPage() {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Contact Sunset Apartments</h1>
        <form action="/api/report-issue" method="POST">
          <div>
            <label>Name:</label><br />
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Unit Number:</label><br />
            <input type="text" name="unit" required />
          </div>
          <div>
            <label>Issue Description:</label><br />
            <textarea name="issue" rows={4} required></textarea>
          </div>
          <button type="submit" style={{ marginTop: "1rem" }}>Submit Issue</button>
        </form>
      </div>
    );
  }
  