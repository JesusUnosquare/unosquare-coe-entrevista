using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.dataAccess.Migrations
{
    public partial class SeedDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Toys",
                columns: new[] { "Id", "AgeRestriction", "Company", "Description", "ImageLink", "Name", "Price" },
                values: new object[] { 1, 5, "ToyStory", "Space Soldier", "", "Buzz", 300m });

            migrationBuilder.InsertData(
                table: "Toys",
                columns: new[] { "Id", "AgeRestriction", "Company", "Description", "ImageLink", "Name", "Price" },
                values: new object[] { 2, 5, "ToyStory", "Cowboy", "", "Budy", 400m });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Toys",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Toys",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
