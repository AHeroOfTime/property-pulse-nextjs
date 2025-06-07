import '@/assets/styles/globals.css';

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main className='font-poppins'>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
