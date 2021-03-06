﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_NORWAY_Busexpress.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Stop> Stops { get; set; }
        public DbSet<Route> Routes { get; set; }
        public DbSet<RouteTable> RouteTables { get; set; }
        public DbSet<TicketType> TicketTypes { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<TicketTypeComposition> TicketTypeCompositions { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<DatabaseAccess> DatabaseAccesses { get; set; }
        public DbSet<DatabaseChange> DatabaseChanges { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }
    }

    public class DatabaseAccess
    { 
        public int Id { get; set; }
        public virtual User User { get; set; }
        public String DateTime { get; set; }
        public String Type { get; set; }
        public virtual List<DatabaseChange> DatabaseChanges { get; set; }
    }

    public class DatabaseChange
    {
        public int Id { get; set; }
        public virtual DatabaseAccess DatabaseAccess { get; set; }
        public String Type { get; set; }
        public String Change { get; set; }
    }
}
