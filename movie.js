const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');
const price=document.getElementById('price');

const movieSelect=document.getElementById('movie');
let tp=+movieSelect.value;
const populateUI=()=>{
    const selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats!= null&&selectedSeats.length>0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected');
            }
        });
    }
    const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');
    const selectedMoviePrice=localStorage.getItem('selectedMoviePrice');
    if(selectedMovieIndex!=null){
        
    }

}
