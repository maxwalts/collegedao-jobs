'use client'

export default function Home() {
  function handleDeleteApplications() {
    fetch("/api/application/all",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(res => res.json())
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-black">
      <button className="bg-white" onClick={handleDeleteApplications}>Delete all applications</button>
    </div>
  );
}

// dashboard 
// Manage applications
// pick the best, send them to the employers

// Student information
// resume, socials, contact details, location preference, declarations (veteren, disability, etc)

// design example at https://web3.career/ and https://cryptocurrencyjobs.co/web3/ 