const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');
const price=document.getElementById('price');
//user selected movie is passed by its Id
const movieSelect=document.getElementById('movie');
let tp=+movieSelect.value; //total price calculation
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
        movieSelect.selectedIndex=selectedMovieIndex;
    }
    if(selectedMoviePrice!=null){
        count.innerText=selectedSeats.length;
        price.innerText=selectedSeats.length* +selectedMoviePrice;

    }
};

selectedMovie=(movieIndex,moviePrice)=>{
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
};
const updateSelectedSeatsCount=()=>{
    const selectedSeats=document.querySelectorAll('.row .selected');
    const seatsIndex=[...selectedSeats].map(seat =>[...seats].indexOf(seat));
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    const selectedSeatsCount=selectedSeats.length;
    count.innerText=selectedSeatsCount;
    price.innerText=selectedSeatsCount*tp;
};
container.addEventListener('click',e=>{
    if(
        e.target.classList.contains('seat')&&
        !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected');
        updateSelectedSeatsCount();
    }
});
movieSelect.addEventListener('change',e=>{
    tp=+ e.target.value;
    selectedMovie(e.target.selectedIndex,e.target.value);
    updateSelectedSeatsCount();
});
