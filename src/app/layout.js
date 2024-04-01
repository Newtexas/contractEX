import StyledComponentsRegistry from './registry'
import Setglobal from './styles/Setglobal'

export default function RootLayout({ children }) {
  return (
    <html> 
      <body>
     
        <StyledComponentsRegistry>
        <Setglobal />{children}
          </StyledComponentsRegistry>
      </body>
    </html>
  )
}
