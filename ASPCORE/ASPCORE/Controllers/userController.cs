using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPCORE.Data;
using ASPCORE.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ASPCORE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userController : ControllerBase
    {
        private readonly CustomerContext _context;
        private feedback respond = new feedback();
        public userController(CustomerContext customerContext)
        {
            _context = customerContext;
        }
        [HttpPost]
        public feedback post([FromBody]Customer customer) 
        {
            var isEmailValiable = _context.customer.SingleOrDefault(x => x.email == customer.email);

            if (isEmailValiable != null && customer.name == null)
            {
                if (isEmailValiable.password == customer.password)
                {
                    respond.email = true;
                    respond.password = true;
                    respond.userAdded = false;
                }
                else
                {
                    respond.email = true;
                    respond.password = false;
                    respond.userAdded = false;
                }
            }
            else if (customer.name != null)
            {
                _context.customer.Add(customer);
                _context.SaveChanges();
                respond.userAdded = true;
            }


            return respond;
        }

    }
}