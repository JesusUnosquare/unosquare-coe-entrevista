using Microsoft.EntityFrameworkCore;
using webapi.dataAccess.Contexts;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddCors(options =>
{
options.AddPolicy(
    name: "AllowOrigin",
    builder => { builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader(); });
});
// Add services to the container.

builder.Services.AddControllers();

var app = builder.Build();
app.UseCors("AllowOrigin");
// Configure the HTTP request pipeline.

//app.UseAuthorization();

app.MapControllers();

app.Run();
