using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPCORE.Data;
using Microsoft.AspNetCore.Mvc;

namespace ASPCORE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly CustomerContext _customerContext;
        public ValuesController(CustomerContext customerContext)
        {
            _customerContext = customerContext;
        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Customer value)
        {
            _customerContext.customer.Add(value);
            _customerContext.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
