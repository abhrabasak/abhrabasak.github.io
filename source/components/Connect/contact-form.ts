const postJsonForm = (data: Record<string, FormDataEntryValue>): RequestInit => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(data),
});

document.querySelector("form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const data = Object.fromEntries([...new FormData(form)]);

  const response = await fetch("/api/hello", postJsonForm(data));
  if (response.ok) {
    const result = await response.json();
    alert(result.message);
    // form.reset();
  } else {
    alert("Failed to send message");
  }
});
