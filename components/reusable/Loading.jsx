export default function Loading() {
    return (
      <div className="loader">
        <style jsx>{`
          .loader {
            width: 50px;
            height: 50px;
            border: 5px solid lightgray;
            border-radius: 50%;
            border-top-color: #3498db;
            animation: spin 1s ease-in-out infinite;
          }
  
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }