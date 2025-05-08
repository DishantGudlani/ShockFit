"use client"; // Ensure this is at the top of the file

import * as React from 'react';
import dynamic from 'next/dynamic';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { AiOutlineClose } from 'react-icons/ai';
import Classic from '@/app/detail/classic-massage/page';
import Sports from '@/app/detail/sports-massage/page';
import Mederotherapy from '@/app/detail/mederotherapy/page';
import Raindrop from '@/app/detail/raindrop/page';

// Styled components
const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid white',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    width: '250px',
    height: '350px',
    margin: '0',
    marginBottom: '10px',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[10],
    },
}));

const CustomButton = styled(Button)(() => ({
    color: 'white',
    border: '1px solid white',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        transform: 'scale(1.1)',
    },
}));

// Styled component for the popup scrollable content
const PopupScrollableContent = styled(Box)(({ theme }) => ({
    maxHeight: 'calc(100vh - 50px)', 
    overflowY: 'auto', 
    '&::-webkit-scrollbar': {
        width: '8px', 
    },
    '&::-webkit-scrollbar-thumb': {
        background: 'linear-gradient(to right, #a855f7, #7c3aed, #ec4899)', // Gradient color for thumb
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#333', 
    },
}));

// Main component with state management
export default function CardGrid() {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [selectedPage, setSelectedPage] = React.useState<string>('');

    const handleOpenPopup = (page: string) => {
        setSelectedPage(page);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const cardsData = [
        {
            image: "/images/web-1.jpg",
            title: "Klasična masaža",
            description: "će vas opustiti nakon užurbane i stresne svakodnevice te pružiti utočište vašem tijelu, umu i duši…",
            page: "classic",
        },
        {
            image: "/images/web-2.jpg",
            title: "Sportska masaža",
            description: "će vas pripremiti za moguća sportska natjecanja, tako da ćete se osjećati spremniji no ikad…",
            page: "sports",
        },
        {
            image: "/images/web-3.jpg",
            title: "Maderoterapija",
            description: "je tehnika masaže koja uspješno otklanja i najtvrdokorniji celulit tj. otklanja onu narančinu koru, koju sve žene…",
            page: "mederotherapy",
        },
        {
            image: "/images/web-4.jpg",
            title: "Raindrop",
            description: "tehnika masaže se izvodi sa eteričnim uljima, koja zbog esencija ima vrlo dobra postignuća…",
            page: "raindrop",
        }
    ];

    const renderSelectedPage = () => {
        switch (selectedPage) {
            case 'classic':
                return <Classic />;
            case 'sports':
                return <Sports />;
            case 'mederotherapy':
                return <Mederotherapy />;
            case 'raindrop':
                return <Raindrop />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Grid container spacing={2} justifyContent="center" alignItems="center" >
                {cardsData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index} display="flex" justifyContent="center" >
                        <CustomCard>
                            <CardActionArea onClick={() => handleOpenPopup(card.page)}> {/* Make entire card clickable */}
                                <Box sx={{ height: '150px', width: '100%', borderRadius: '8px 8px 0 0', overflow: 'hidden' }}>
                                    <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                                <CardContent sx={{ height: '150px' }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'white' }}>
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <CustomButton size="small" variant="outlined" onClick={() => handleOpenPopup(card.page)}>
                                    pročitajte više
                                </CustomButton>
                            </CardActions>
                        </CustomCard>
                    </Grid>
                ))}
            </Grid>

            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                    <div className="relative bg-black rounded-lg shadow-lg p-6 max-w-4xl w-full h-full mx-4 overflow-y-auto">
                        <button
                            onClick={handleClosePopup}
                            className="absolute -top-3 right-10 text-gray-500 hover:text-gray-700 bg-black border border-gray-300 rounded-full shadow-md p-1 transition-transform transform hover:scale-110 mt-9"
                        >
                            <AiOutlineClose size={20} />
                        </button>

                        {/* Render the dynamically selected page */}
                        <PopupScrollableContent>
                            {renderSelectedPage()}
                        </PopupScrollableContent>
                    </div>
                </div>
            )}
        </div>
    );
}
