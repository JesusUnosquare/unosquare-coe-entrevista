using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.dataAccess.Contexts;
using webapi.model.Models;

namespace webapi.Controllers
{
    [Route("api/toy")]
    [ApiController]
    public class ToyController : ControllerBase
    {
        private readonly AplicationDbContext _db;
        public ToyController(AplicationDbContext db)
        {
            _db = db;
        }
        [HttpGet("{id}")]
        public IActionResult GetToy([FromRoute] int id)
        {
            var product = _db.Toys.FirstOrDefault(x => x.Id == id);
            if (product is null)
                return BadRequest();
            else
                return Ok(product);
        }
        [HttpGet]
        public List<Toy> GetAllToys()
        {
            var result = new List<Toy>();
            result = _db.Toys.ToList();
            return result;
        }
        [HttpPost]
        public IActionResult AddToy([FromBody] Toy toy)
        {
            if (toy != null)
            {
                _db.Toys.Add(toy);
                _db.SaveChanges();
                return Ok();
            }
            else
                return BadRequest("Product Couldn't be null");

        }
        [HttpPut]
        public IActionResult UpdateToy([FromBody] Toy toy)
        {
            if (toy.Id > 0)
            {
                _db.Toys.Update(toy);
                _db.SaveChanges();
                return Ok();
            }
            else
                return NotFound();
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteToy([FromRoute] int id)
        {
            if (id > 0)
            {
                var toyToDelete = _db.Toys.FirstOrDefault(p => p.Id == id);
                if (toyToDelete == null)
                    return NotFound();
                _db.Toys.Remove(toyToDelete);
                _db.SaveChanges();
                return Ok();
            }
            else
                return NotFound("Id must be greater than 0");
        }
    }
}
