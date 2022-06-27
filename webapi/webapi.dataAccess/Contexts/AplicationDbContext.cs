using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using webapi.model.Models;

namespace webapi.dataAccess.Contexts
{
    public class AplicationDbContext : DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating( ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Toy>().HasData(new Toy
            {
                Id = 1,
                Name = "Buzz",
                Price = 300,
                Company= "ToyStory",
                AgeRestriction = 5,
                Description ="Space Soldier",
                ImageLink=""
                
            });

            modelbuilder.Entity<Toy>().HasData(new Toy
            {
                Id = 2,
                Name = "Budy",
                Price = 400,
                Company = "ToyStory",
                AgeRestriction = 5,
                Description = "Cowboy",
                ImageLink = ""
            });
        }
        public DbSet<Toy> Toys { get; set; } = null!;
    }
}
