import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Sunset Apartments</h1>
      
      <h2>Interior Views</h2>
      <div className="gallery">
        <Image src="/assets/images/Interior_1.jpg" alt="Interior 1" width={300} height={200} />
        <Image src="/assets/images/Interior_2.jpg" alt="Interior 2" width={300} height={200} />
      </div>

      <h2>Exterior Views</h2>
      <div className="gallery">
        <Image src="/assets/images/Exterior_1.jpg" alt="Exterior 1" width={300} height={200} />
        <Image src="/assets/images/Exterior_2.jpg" alt="Exterior 2" width={300} height={200} />
        <Image src="/assets/images/Exterior_3.jpg" alt="Exterior 3" width={300} height={200} />
      </div>

      <h2>Apartment Plans</h2>
      <div className="gallery">
        <Image src="/assets/images/Plan_1.jpg" alt="Plan 1" width={300} height={200} />
        <Image src="/assets/images/Plan_2.jpg" alt="Plan 2" width={300} height={200} />
        <Image src="/assets/images/Plan_3.jpg" alt="Plan 3" width={300} height={200} />
      </div>

      <h2>Important Documents</h2>
      <ul>
        <li><Link href="/assets/documents/ByLaws.pdf" target="_blank">Bylaws</Link></li>
        <li><Link href="/assets/documents/Visitor_Policy.pdf" target="_blank">Visitor Policy</Link></li>
        <li><Link href="/assets/documents/Maintenance_Issue.pdf" target="_blank">Maintenance Request Form</Link></li>
        <li><Link href="/assets/documents/Complaint.pdf" target="_blank">Complaint Form</Link></li>
      </ul>
    </div>
  );
}
