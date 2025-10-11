const resercherReports = async (
  category: string,
  description: string,
  potential_risk: string,
  project_id: number,
  recommendation: string,
  severity: string,
  title: string,
  wallet_address: string
) => {
  try {
    const response = await fetch(`http://127.0.0.1:3001/api/reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        category: category,
        description: description,
        potential_risk: potential_risk,
        project_id: project_id,
        recommendation: recommendation,
        severity: severity,
        title: title,
        wallet_addresst: wallet_address,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Capture response body
      throw new Error(
        `HTTP error! Status: ${response.status}, Body: ${errorText}`
      );
    }

    const data = await response.json();
    console.log("Response:", data);
    return data;
  } catch (error) {
    console.error("Error uploading project:", error);
    throw error;
  }
};
