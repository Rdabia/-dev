export default function AuthPage() {
  return (
    <div style={{ 
      maxWidth: "400px", 
      margin: "50px auto", 
      padding: "20px", 
      border: "1px solid #ddd", 
      borderRadius: "8px", 
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)" 
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login / Sign Up</h2>
      
      <form>
        <input 
          type="email" 
          placeholder="Email" 
          style={{ 
            width: "100%", 
            padding: "12px", 
            marginBottom: "15px", 
            borderRadius: "6px", 
            border: "1px solid #ccc" 
          }} 
        />

        <input 
          type="password" 
          placeholder="Password" 
          style={{ 
            width: "100%", 
            padding: "12px", 
            marginBottom: "20px", 
            borderRadius: "6px", 
            border: "1px solid #ccc" 
          }} 
        />

        <button 
          type="button" 
          style={{ 
            width: "100%", 
            padding: "12px", 
            backgroundColor: "#4f46e5", 
            color: "white", 
            border: "none", 
            borderRadius: "6px", 
            fontWeight: "bold",
            cursor: "pointer" 
          }}
        >
          Login / Sign Up
        </button>
      </form>
    </div>
  );
}
