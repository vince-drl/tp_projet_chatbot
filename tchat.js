import Bot from './bot';
const Tchat = class {
	constructor(bots){
		this.el = document.querySelector('#app');
		this.title = 'Chatbot.IO';
		this.bots = this.createBots(bot);
	}

	renderHeader(){
		return `
			<header>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">${this.title}</span>
          </div>
        </nav>
      </header>
		`;
	}

	renderContainer(){
		return `
		<main class="container-fluid">
			<div class="row">
			${this.renderBotsList()}
			${this.renderContentMessages()}
			</div>
		</main>`;
	}

	renderInputMessage(){
		return`<div id="input-message" class="row">
                <div class="col-12">
                  <form class="row g-2">
                    <div class="col-10">
                      <input type="text" class="form-control" id="message" placeholder="your_message"/>
                    </div>
                    <div class="col-2">
                      <div class="d-grid">
                        <button type="submit" class="btn btn-primary mb-3">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
            </div>`;
	}

	renderContentMessages(){
		return`<section id="content-messages" class="col_9">
            <div class="row" id="messages">
              
            </div>
            ${this.renderInputMessage()}
          </section>`;
	}

	renderBotsList(){
		return ` <section id="bot-list" class="col-3 mt-3">
            ${this.bots.map((bot) => this.renderBot(bot.entity)).join('')}
          </section>`
	}

	renderBot(data){
		const {id, name, avatar, countMessage } = data;
		return `<div data-id="${id}" class="row">
              <div class="col-4">
                <img src="${avatar}" alt="image" width="100px" height="100px">
              </div>
              <div class="col-4 pt-4">
               ${name}
              </div>
              <div class="col-4 pt-4">
                <span class="badge bg-primary rounded-pill">${0}</span>
              </div>
              <hr />
            </div>`;
	}

addCountMessage(el){
	const badge = el.querySelector('.badge');
	badge.textContent = parseInt(badge.textContent, 10) += 1;
}

	renderMessageSended(message){
        const date = new Date();
		return `<div class="row mt-3">
                <div class="col-6"></div>
                <div class="col-6">
                  <div class="card">
                    <div class="card-header">
                      Vincent
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">${date.toLocaleString()}</h5>
                      <p class="card-text">${message}</p>
                    </div>
                  </div>
                </div>
              </div>`;
	}

	renderMessageReceived(){
        const{
            name, avatar, meassage
        } 
		return `<div class="row">
                <div class="col-6">
                  <div class="card">
                    <div class="card-header">
                      Bot
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">15 Déc 14:20</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
                <div class="col-6"></div>
              </div>`;
	}

	run() {
		this.el.innerHTML += this.renderHeader();
		this.el.innerHTML += this.renderContainer();
		const els = document.querySelectorAll('#bot-list > div');
        this.addCountMessage(els[0]);
        this.sendMessage();
	}

    sendMessage(){
        const messageEl = document.querySelector('#messages');
        const inputEl = document.querySelector('#input-message input');
        const buttonEl = document.querySelector('#input-message button');
        buttonEl.addEventListener('click', (e) => {
            e.preventDefault();
            const {value} = inputEl;
            messageEl.scrollTop = messageEl.scrollHeight;
            messageEl.innerHTML += this.renderMessageSended(inputEl.value);
            inputEl.value = '';
            this.searchActionByBot
        });
    }
    createBots() {
        return this.bots.map((bot) => new Bot(bot))
    }

    searchActionByBot(value){
        const messageEl = document.querySelector('#messages');
        for(let i = 0; i < this.bots.length; i++)
        {
            const bot = this.bots[i];
            const message = bot.findActionByValue(value);
            const{id, name, avatar} = bot.entity;
            if(!message){
                return message;
            }
            bots.push({
                id, 
                name,
                avatar,
                message
            })
        }

           
            
        });
        bots.forEach((bot) => {
            if(bot.message){
                messageEl.innerHTML += this.renderMessageReceived(bot);
            }
        })
    }

};

export default Tchat;
