  const signup = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload

    // ✅ Step 2: Basic validation
    if (!name || !email || !password || !confirm) {
      alert("Please fill in all fields.");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // ✅ Step 3: Call register API using fetch()
      const response = await fetch("https://api.connectycube.com/users.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "CB-Token": (globalThis as any).authToken || "",
        },
        body: JSON.stringify({
          user: {
            login: email,
            password: password,
            full_name: name,
          },
        }),
      });

      // ✅ Step 4: Handle response
      const result = await response.json();

      if (response.ok) {
        console.log("✅ Registration successful:", result);
        alert("User registered successfully!");
      } else {
        console.error("❌ Registration failed:", result);
        alert(
          result.errors ? JSON.stringify(result.errors) : "Registration failed!"
        );
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };