// import * as React from 'react';
// import { 
//   AppBar, Box, Toolbar, IconButton, Typography, 
//   Container, Button, Menu, MenuItem, CssBaseline 
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AdbIcon from '@mui/icons-material/Adb';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
// import InstagramIcon from '@mui/icons-material/Instagram';

// // 1. Navigation Pages
// const pages = ['Home', 'About', 'Skills', 'Project', 'Contact'];

// // 2. Social Links
// const socialLinks = [
//   { icon: <GitHubIcon />, url: 'https://github.com/saifur2468' },
//   { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/md-saifur-rahman-62b710376/' },
//   { icon: <EmailIcon />, url: 'mailto:saifur.devweb@gmail.com' },
//   { icon: <InstagramIcon />, url: 'https://www.instagram.com/saif.ur31/' },
// ];

// function App() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [activeSection, setActiveSection] = React.useState('home');

//   // --- Functions for Navigation ---
//   const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
//   const handleCloseNavMenu = () => setAnchorElNav(null);

//   const handleScroll = (id) => {
//     const element = document.getElementById(id.toLowerCase());
//     if (element) {
//       const offset = 70; // Navbar height offset
//       const bodyRect = document.body.getBoundingClientRect().top;
//       const elementRect = element.getBoundingClientRect().top;
//       const elementPosition = elementRect - bodyRect;
//       const offsetPosition = elementPosition - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth',
//       });
//     }
//     handleCloseNavMenu();
//   };

//   // --- Intersection Observer for Active State ---
//   React.useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '-20% 0px -70% 0px', // Detects section in center
//       threshold: 0,
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     pages.forEach((page) => {
//       const element = document.getElementById(page.toLowerCase());
//       if (element) observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <Box>
//       <CssBaseline />
      
//       {/* NAVBAR SECTION */}
//       <AppBar position="fixed" sx={{ backgroundColor: '#111' }}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//             <Typography
//               variant="h6"
//               noWrap
//               sx={{
//                 mr: 2,
//                 display: { xs: 'none', md: 'flex' },
//                 fontWeight: 700,
//                 cursor: 'pointer',
//               }}
//               onClick={() => handleScroll('home')}
//             >
//               SAIFUR
//             </Typography>

//             {/* Mobile Menu Icon */}
//             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//               <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorElNav}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{ display: { xs: 'block', md: 'none' } }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={() => handleScroll(page)}>
//                     <Typography 
//                       textAlign="center" 
//                       sx={{ 
//                         color: activeSection === page.toLowerCase() ? '#1976d2' : 'inherit',
//                         fontWeight: activeSection === page.toLowerCase() ? 'bold' : 'normal'
//                       }}
//                     >
//                       {page}
//                     </Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>

//             {/* Desktop Menu Buttons */}
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   onClick={() => handleScroll(page)}
//                   sx={{
//                     my: 2,
//                     mx: 1,
//                     color: activeSection === page.toLowerCase() ? '#2196f3' : 'white',
//                     display: 'block',
//                     fontWeight: activeSection === page.toLowerCase() ? 700 : 400,
//                     borderBottom: activeSection === page.toLowerCase() ? '2px solid #2196f3' : '2px solid transparent',
//                     borderRadius: 0,
//                     '&:hover': { color: '#2196f3' }
//                   }}
//                 >
//                   {page}
//                 </Button>
//               ))}
//             </Box>

//             {/* Social Icons */}
//             <Box sx={{ flexGrow: 0, display: 'flex' }}>
//               {socialLinks.map((social, index) => (
//                 <IconButton 
//                   key={index} 
//                   component="a" 
//                   href={social.url} 
//                   target="_blank" 
//                   sx={{ color: 'white', '&:hover': { color: '#2196f3' } }}
//                 >
//                   {social.icon}
//                 </IconButton>
//               ))}
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

//       {/* CONTENT SECTIONS */}
//       <Box component="main">
//         {pages.map((page) => (
//           <Box
//             key={page}
//             id={page.toLowerCase()}
//             sx={{
//               height: '100vh',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: page === 'About' || page === 'Project' ? '#f5f5f5' : '#fff',
//               borderBottom: '1px solid #ddd'
//             }}
//           >
//             <Typography variant="h2" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
//               {page} Section
//             </Typography>
//           </Box>
//         ))}
//       </Box>

//     </Box>
//   );
// }

// export default App;

































import * as React from 'react';
import { 
  AppBar, Box, Toolbar, IconButton, Typography, 
  Container, Button, Menu, MenuItem, CssBaseline 
} from '@mui/material';

// Icons (AdbIcon er poriborte CodeIcon use kora hoyeche error avoid korte)
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import CodeIcon from '@mui/icons-material/Code';

const pages = ['Home', 'About', 'Skills', 'Project', 'Contact'];

const socialLinks = [
  { icon: <GitHubIcon />, url: 'https://github.com/saifur2468' },
  { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/md-saifur-rahman-62b710376/' },
  { icon: <EmailIcon />, url: 'mailto:saifur.devweb@gmail.com' },
  { icon: <InstagramIcon />, url: 'https://www.instagram.com/saif.ur31/' },
];

export default function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState('home');

  // --- Functions ---
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  // Smooth Scroll Function
  const handleScroll = (id) => {
    const sectionId = id.toLowerCase();
    const element = document.getElementById(sectionId);
    
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    handleCloseNavMenu();
  };

  // Intersection Observer for Active State Highlight
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    pages.forEach((page) => {
      const el = document.getElementById(page.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box>
      <CssBaseline />
      
      {/* --- NAVBAR --- */}
      <AppBar position="fixed" sx={{ backgroundColor: '#111', zIndex: 1201 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#2196f3' }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 800,
                cursor: 'pointer',
              }}
              onClick={() => handleScroll('home')}
            >
              SAIFUR
            </Typography>

            {/* Mobile View Menu Icon */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleScroll(page)}>
                    <Typography 
                      textAlign="center" 
                      sx={{ 
                        color: activeSection === page.toLowerCase() ? '#2196f3' : 'inherit',
                        fontWeight: activeSection === page.toLowerCase() ? 'bold' : 'normal'
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop View Links */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleScroll(page)}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: activeSection === page.toLowerCase() ? '#2196f3' : 'white',
                    display: 'block',
                    fontWeight: activeSection === page.toLowerCase() ? 700 : 400,
                    borderBottom: activeSection === page.toLowerCase() ? '2px solid #2196f3' : '2px solid transparent',
                    borderRadius: 0,
                    '&:hover': { color: '#2196f3' }
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: 'flex' }}>
              {socialLinks.map((social, index) => (
                <IconButton 
                  key={index} 
                  component="a" 
                  href={social.url} 
                  target="_blank" 
                  sx={{ color: 'white', '&:hover': { color: '#2196f3' } }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* --- CONTENT SECTIONS --- */}
      {/* Note: Ekhane section gulor ID oboshshoi pages array er namer lowercase hote hobe 
      */}
     
    </Box>
  );
}