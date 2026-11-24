import { db } from "./src/prisma/db";

interface Movie {
    title:string,
    overview:string,
    releaseYear:number,
    genres:string[],
    runtime:number,
    posterUrl:string,
    createdBy:string
}

async function main() {
        const user = await db.orm.public.User.create({
        name:"Test User",
        email:"test@example.com",
        password:"123",
    })
   const movies:Movie[] = [

       { title:"The Matrix",
        overview:"A story about a hacker who is forced to choose between saving his family or saving the world",
        releaseYear:1972,
        genres:["Action","Science Fiction"],
        runtime:175,
        posterUrl:"https://www.imdb.com/images/M/MV5BMTYwODk5NjAxNl5BMl5BanBnXkFtZTgwMDQwNjQwMjE@._V1_UX300.jpg",
        createdBy:user.id
     
    },
    { title:"The Godfather",
        overview:"A story about a family of crime that is controlled by a godfather",
        releaseYear:1972,
        genres:["Crime","Drama"],
        runtime:175,
        posterUrl:"https://www.imdb.com/images/M/MV5BMTYwODk5NjAxNl5BMl5BanBnXkFtZTgwMDQwNjQwMjE@._V1_UX300.jpg",
        createdBy:user.id
 
    },
    { title:"The Godfather Part II",
        overview:"A story about a family of crime that is controlled by a godfather",
        releaseYear:1974,
        genres:["Crime","Drama"],
        runtime:175,
        posterUrl:"https://www.imdb.com/images/M/MV5BMTYwODk5NjAxNl5BMl5BanBnXkFtZTgwMDQwNjQwMjE@._V1_UX300.jpg",
        createdBy:user.id
 
    },
    { title:"The Godfather Part III",
        overview:"A story about a family of crime that is controlled by a godfather",
        releaseYear:1974,
        genres:["Crime","Drama"],
        runtime:175,
        posterUrl:"https://www.imdb.com/images/M/MV5BMTYwODk5NjAxNl5BMl5BanBnXkFtZTgwMDQwNjQwMjE@._V1_UX300.jpg",
        createdBy:user.id
 
    },
    { title:"The Godfather Part IV",
        overview:"A story about a family of crime that is controlled by a godfather",
        releaseYear:1974,
        genres:["Crime","Drama"],
        runtime:175,
        posterUrl:"https://www.imdb.com/images/M/MV5BMTYwODk5NjAxNl5BMl5BanBnXkFtZTgwMDQwNjQwMjE@._V1_UX300.jpg",
        createdBy:user.id
 
    },
    { title:"The Godfather Part V",
        overview:"A story about a family of crime that is controlled by a godfather",
        releaseYear:1974,
        genres:["Crime","Drama"],
        runtime:175,
        posterUrl:"https://www.imdb.com/images/M/MV5BMTYwODk5NjAxNl5BMl5BanBnXkFtZTgwMDQwNjQwMjE@._V1_UX300.jpg",   
        createdBy:user.id
 
    },
    { title:"The Godfather Part VI",
        overview:"A story about a family of crime that is controlled by a godfather",
        releaseYear:1974,
        genres:["Crime","Drama"],
        runtime:175,
        posterUrl:"https://www.imdb.com/images/M/MV5BMTYwODk5NjAxNl5BMl5BanBnXkFtZTgwMDQwNjQwMjE@._V1_UX300.jpg",
        createdBy:user.id
 
    },
    { title:"The Godfather Part VII",
        overview:"A story about a family of crime that is controlled by a godfather",
        releaseYear:1974,
        genres:["Crime","Drama"],
        runtime:175,
        posterUrl:"https://www.imdb.com/images/M/MV5BMTYwODk5NjAxNl5BMl5BanBnXkFtZTgwMDQwNjQwMjE@._V1_UX300.jpg",
        createdBy:user.id
 
    },
    { title:"The Godfather Part VIII",
        overview:"A story about a family of crime that is controlled by a godfather",
        releaseYear:1974,
        genres:["Crime","Drama"],
        runtime:175,
        posterUrl:"https://www.imdb.com/images/M/MV5BMTYwODk5NjAxNl5BMl5BanBnXkFtZTgwMDQwNjQwMjE@._V1_UX300.jpg",
        createdBy:user.id
 
    }
    
    ]

    await db.orm.public.Movie.createAll(movies)

  await db.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

// npx tsx script.ts