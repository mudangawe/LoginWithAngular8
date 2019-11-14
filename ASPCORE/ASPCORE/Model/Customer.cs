using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ASPCORE.Data
{
    public class Customer
    {
        [Key]
        public int ID { set; get; }
        public string name { set; get; }
        public string surname { set; get; }
        public string email { set; get; }
        public string number { set; get; }
        public string password { set; get; }
     
    }
}
